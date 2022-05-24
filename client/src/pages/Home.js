import { Button, Box } from "@mantine/core";
import WritePost from "components/Feed/WritePost";
import { withPosts } from "components/Loader/withPosts";
import Feed from "../components/Feed/Feed";
import { queryExample } from "QueryExample";
import { authenticate } from "graphql/auth";
import { generateChallenge } from "graphql/auth";
import { useMoralis } from "react-moralis";
import { explore } from "lens/explore/explore";

import LensSignInButton from "components/Common/LensSignInButton";
const Home = () => {
  // Load feed
  const LoadedFeed = withPosts(Feed);
  // Render a section to write a post followed by a list of posts
  return (
    <Box>
<LensSignInButton/>
<Button onClick={async () => console.log(await explore())}>

</Button>
      <WritePost />
      <LoadedFeed />
    </Box>
  );
};
export default Home;
