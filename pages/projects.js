import {
  ApolloClient,
  InMemoryCache,
  gql,
  ApolloProvider,
  useQuery,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import Link from "next/link";
import { FaStar, FaPython } from "react-icons/fa";

const projects = [
  {
    "name": "Meetup Map API",
    "stars": "1",
    "desc": "Backend server for Meetup Map.",
    "tags": ["Javascript", "GraphQL", "Prisma.Js", "PostgreSQL"],
    "link": "https://github.com/MeetupMap/api"
  }
]

export default function Projects(props) {
  return (
    <div className="h-full px-16 py-32 mx-40 md:mx-0 md:px-2 md:py-16">
      <h1 className="inline py-2 mb-8 border-b-4 border-green-400 text-7xl md:text-3xl">
        Projects
      </h1>
      <h2 className="mt-12 mb-2 text-xl">
        Some of the <span className="text-green-400">projects</span> I&apos;ve
        worked on!
      </h2>
      <span className="mb-6 text-xl thin md:text-lg">(Fetched using the Github API)</span>
      <div className="grid grid-cols-2 gap-16 my-10 md:grid-cols-1">
        {projects.map((repo, i) => (
          <Link key={i} href={repo.link} passHref>
            <div className="px-6 py-4 duration-200 border border-gray-400 hover:border-green-400 hover:cursor-pointer rounded-3xl md:px-4 md:py-3">
              <div className="pb-4 mb-4 border-b-4 border-green-400">
                <h1 className="py-2 text-2xl">
                  {repo.name}
                </h1>
                <div className="flex flex-wrap mt-2">
                  {repo.tags.map((tag, i) => (
                    <div className="px-2 py-2 mb-3 mr-3 border border-green-500 rounded-xl" key={i}>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex flex-row items-center justify-start mt-2">
                  <FaStar size={20} className="text-yellow-400"/>
                  <h1 className="ml-2 text-lg">{repo.stars}</h1>
                </div>
              </div>

              <span className="mb-8 text-xl thin">{repo.desc}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  require("dotenv").config();

  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        user(login: "NebuDev14") {
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  url
                  stargazerCount
                  description
                  nameWithOwner
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }) => node);

  return {
    props: {
      repos: pinnedItems,
    },
  };
};
