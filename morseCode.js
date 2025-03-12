class MorseCode {
  async fetchMorseCodeMap() {
    try {
      const response = await fetch('../server/morseMap.json');
      if (!response.ok) {
        throw new Error('Failed to fetch Morse code map');
      }
      this.morseMap = await response.json();
      console.log('Fetched Morse Code Map:', this.morseMap); // Log the fetched data
    } catch (error) {
      console.error('Error loading Morse code map:', error);
    }
  }
}

const morseCodeLogic = new MorseCode();