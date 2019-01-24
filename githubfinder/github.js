class Github {
  constructor() {
    this.client_id = 'd5f9269aa9d9a2a21372';
    this.client_secret = '41e6c3281be5851f85c48557f3323e5df3124aa8';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,  // то же, что и =>  profile: profile
      repos
    }
  }
}