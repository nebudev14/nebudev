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
import { FaStar } from "react-icons/fa";

export default function Projects(props) {
  return (
    <div className="h-full px-16 py-32 mx-40">
      <h1 className="inline py-2 mb-8 border-b-4 border-green-400 text-7xl">
        Projects
      </h1>
      <h2 className="mt-12 mb-2 text-xl">
        Some of the <span className="text-green-400">projects</span> I&apos;ve
        worked on!
      </h2>
      <span className="mb-6 text-xl thin">(Fetched using the Github API)</span>
      <div className="grid grid-cols-2 gap-16 my-10">
        {props.repos.map((repo, i) => (
          <Link key={i} href={repo.url} passHref>
            <div className="px-6 py-4 duration-200 border border-black hover:cursor-pointer hover:border-gray-600 rounded-3xl">
              <div className="pb-4 mb-4 border-b-4 border-green-400">
                <h1 className="py-2 text-2xl">
                  {repo.nameWithOwner}
                </h1>
                <div className="flex flex-row items-center justify-start">
                  <FaStar size={20} className="text-yellow-400"/>
                  <h1 className="ml-2 text-lg">{repo.stargazerCount}</h1>
                </div>
              </div>

              <span className="mb-8 text-xl thin">{repo.description}</span>
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
