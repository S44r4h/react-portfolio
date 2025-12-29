function GithubStats({ isDark }) {
  let githubTheme;

  if (!isDark) {
    githubTheme = "vue";
  } else {
    githubTheme = "nightowl"; /* merko nightowl chartreuse_dark */
  }

  return (
    <>
      <a href="https://github.com/S44r4h" target="_blank">
        <img
          className="border-2"
          src={`https://raw.githubusercontent.com/S44r4h/S44r4h/main/profile-summary-card-output/${githubTheme}/1-repos-per-language.svg`}
          alt="GitHub-profilecard"
        />
      </a>
    </>
  );
}

export default GithubStats;
