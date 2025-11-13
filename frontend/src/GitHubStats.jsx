function GithubStats({ isDark }) {
  let githubTheme;

  if (!isDark) {
    githubTheme = "vue";
  } else {
    githubTheme = "merko";
  }

  return (
    <>
      <img
        src={`https://raw.githubusercontent.com/S44r4h/S44r4h/main/profile-summary-card-output/${githubTheme}/0-profile-details.svg`}
        alt="GitHub-profilecard"
      />
    </>
  );
}

export default GithubStats;
