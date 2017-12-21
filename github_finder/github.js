class Github {
  constructor() {
    this.client_id = '4e20cda60fdd290ed26f';
    this.client_secret = '96beec3d9c5bcd5fdf93011bf261bf9ebcfd46d2';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
