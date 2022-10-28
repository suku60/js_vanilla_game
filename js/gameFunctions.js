const screenSwap = (screenId) => {

    let lastScreenId 
    switch (screenId) {
        case 1:
        lastScreenId = 6
        break;
        case 2:
        lastScreenId = 1
        break;
        case 3:
        lastScreenId = 2
        break;
        case 4:
        lastScreenId = 3
        break;
        case 5:
        lastScreenId = 4
        break;
        case 6:
        lastScreenId = 5
        break;
        default:
            break;
    }

    const allScreens = [ "screen_1", "screen_2", "screen_3", "screen_4", "screen_5", "screen_6" ]

    let desiredScreen = "screen_" + screenId;
    let lastScreen = "screen_" + lastScreenId;

    allScreens.forEach(screen => {

        switch (screen) {
            case desiredScreen:
                 document.getElementById(desiredScreen).style.display = "block";
            break;
            case lastScreen:
                document.getElementById(lastScreen).style.animation = "screenOut .1s linear";
            break;
        
            default:
                document.getElementById(screen).style.display = "none"
            break;
        }

        if(screen === desiredScreen) {
            document.getElementById(desiredScreen).style.display = "block";
        }else{
            document.getElementById(screen).style.display = "none"
        }
        
    });

}