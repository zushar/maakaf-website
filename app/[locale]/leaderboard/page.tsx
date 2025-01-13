export type Analitycs = {
  members: {
    name: string;
    node_id: string;
    projects_names: {
      url: string;
      name: string;
    }[];
    avatar_url: string;
    score: number;
    stats: {
      additions: number;
      deletions: number;
      commits: number;
    };
  }[];
  since: string;
  until: string;
};


const LeaderboardPage: React.FC = () => {
  return (
    <>
      <h1>Leaderboard</h1>
      <p>Here you can see the top contributors of the week</p>
    </>
  )
}

export default LeaderboardPage;