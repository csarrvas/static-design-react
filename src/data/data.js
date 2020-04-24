export class API {
  async getData() {
    try {
      const information = await fetch('information.json');
      const informationParsed = await information.json();
      return informationParsed;
    } catch {
      console.error('There was an error loading the data');
      return null;
    }
  }
}