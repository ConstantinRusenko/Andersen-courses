class DayInfo {
  constructor(city, key, cntDays){
    this.city = city;
    this.key = key;
    this.cntDays = cntDays;
  }
    
  getWeather() {
    const requestCity = `api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}&cnt=${this.cnt}`;
    return fetch(requestCity);
    }
    
}
    
class ExtendDayInfo extends Weather {
  constructor(city, key, cntDays) {
    super(city, key, cntDays);
    this.randCities = ['London,uk', 'Kiev', 'Moscow'];
    }
    getRandWeather() {
      const randCity = this.randCities[Math.floor(Math.random()*this.randCities.length)];
      const requestRandCity = `api.openweathermap.org/data/2.5/weather?q=${randCity}&appid=${this.key}&cnt=${this.cnt}`;
      return fetch(requestRandCity);
    }
  }
  
  const weatherCurrentCity = new Weather('Cherkassy', '7aea5fb11ef3f2ed204766e4091cfaa5', 4);
  weatherCurrentCity.getWeather();
  
  const weatherRandCity = new ExtendWeather('Cherkassy', '7aea5fb11ef3f2ed204766e4091cfaa5', 4);
  weatherRandCity.getRandWeather();