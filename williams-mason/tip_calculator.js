function calculateTip(amount, rating) {
    let tipPercent;
    //cInput equals lowercase of rating
    let cInput = rating.toLowerCase()
    //if cInput equals terrible
    if (cInput === 'terrible'){
         // tipPercent = 0.0    
        tipPercent = 0.0;
        //return tipPercent
        return(tipPercent)
    }
    //if cInput equals poor
    if (cInput === 'poor') {
        // tipPercent = 0.05
        tipPercent = 0.05;
        //return tipPercent
        return(tipPercent)

    }
    //if cInput equals good
    if (cInput === 'good') {
        // tipPercent = 0.10
        tipPercent = 0.10;
        //return tipPercent
        return(tipPercent)

    }
    //if cInput equals great
    if (cInput === 'great') {
        // tipPercent = 0.15
        tipPercent = 0.15;
        //return tipPercent
        return(tipPercent)

    }
    //if cInput equals excellent
    if (cInput === 'excellent') {
        // tipPercent = 0.20
        tipPercent = 0.20
        //return tipPercent
        return(tipPercent)

    }
    //if anything else return 'rating not recognized'
    else {
        return('rating not recognized');
    }

    // tipPercent times amount = tipTotal
    const tipTotal = tipPercent * amount;
    //return tipTotal
    return tipTotal;
    
    }