function calculateTip(amount, rating) {
    /* IF rating equals terrible
          THEN tip equals 0%
       ELSE IF rating equals poor
          THEN tip equals 5%
       ELSE IF rating equals good
          THEN tip equals 10%
       ELSE IF rating equals great
          THEN tip equals 15%
       ELSE IF rating equals excellent
          THEN tip equals 20%
       ELSE rating not recognised
      tipTotal equals tip times amount
      RETURN tipTotal
    */
      //IF rating equals terrible
      let tip;
      if (rating == "terrible") {
        tip === 0.0;
      } else if (rating == "poor") {
        tip === 0.5;
      } else if (rating == "good") {
        tip === 0.1;
      } else if (rating == "great") {
        tip === 0.15;
      } else if (rating == "excellent") {
        tip === 0.2
      } else {
        return "Rating not recognized"
      };
      let tipTotal = tip * amount;
      return tipTotal;
    };
    console.log(calculateTip(20, "eXcellent"));  
