const initialState = {
  totalEarthPoints: 8240,
  totalKMTraveled: 73.8,
  totalCarbonReduced: 29.6,
  totalMoneySaved: 240,
  earthPointsHistory: [
    { x: 1, y: 460 },
    { x: 2, y: 780 },
    { x: 3, y: 210 },
    { x: 4, y: 550 }
  ],
  kmTravelledHistory: [
    { x: 1, y: 4.9 },
    { x: 2, y: 8.2 },
    { x: 3, y: 3.1 },
    { x: 4, y: 5.2 }
  ],
  moneySavedHistory: [
    { x: 1, y: 40 },
    { x: 2, y: 70 },
    { x: 3, y: 20 },
    { x: 4, y: 40 }
  ],
  carbonReducedHistory: [
    { x: 1, y: 2.1 },
    { x: 2, y: 5.8 },
    { x: 3, y: 1.4 },
    { x: 4, y: 2.4 }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
