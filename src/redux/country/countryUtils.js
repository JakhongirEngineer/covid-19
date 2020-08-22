export const countryUtil = (countryData) => {
  return {
    country: countryData?.country,
    todayCases: countryData.todayCases,
    cases: countryData.cases,
    todayRecovered: countryData.todayRecovered,
    recovered: countryData.recovered,
    todayDeaths: countryData.todayDeaths,
    deaths: countryData.deaths,
    population: countryData.population,
  };
};
