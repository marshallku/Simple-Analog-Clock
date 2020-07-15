function myClock() {
    let now = new Date();
    const clock = document.getElementById("clock");
    const hourHand = document.createElement("div");
    const minuteHand = document.createElement("div");
    const secondHand = document.createElement("div");
    const dayNDate = document.createElement("div");
    const space = document.createTextNode("\u00A0\u00A0");
    
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let day = 0;
    let date = 0;

    const dayText = document.createTextNode(days[day]);
    const dateText = document.createTextNode(date);
    
    const updateClock = () => {
        now = new Date();
        updateSecondHand();
        updateMinuteHand();
        updateHourHand();
        updateDay();
        updateDate();

        window.requestAnimationFrame(updateClock);
    };
    const updateHourHand = () => {
        const currentHour = now.getHours();
        const hour12 = currentHour > 12 ? currentHour - 12 : currentHour;

        hours = hour12 + (minutes / 60);

        hourHand.style.transform = `rotate3d(0, 0, 1, ${hours / 12 * 360}deg)`;
    };
    const updateMinuteHand = () => {
        minutes = now.getMinutes() + (seconds / 60);

        minuteHand.style.transform = `rotate3d(0, 0, 1, ${minutes / 60 * 360}deg)`;
    };
    const updateSecondHand = () => {
        seconds = now.getSeconds() + (now.getMilliseconds() / 1000);

        secondHand.style.transform = `rotate3d(0, 0, 1, ${seconds / 60 * 360}deg)`;
    };
    const updateDay = () => {
        day !== now.getDay() && (
            day = now.getDay(),
            dayText.nodeValue = days[day]
        )
    };
    const updateDate = () => {
        date !== now.getDate() && (
            date = now.getDate(),
            dateText.nodeValue = date
        )
    };

    updateClock();

    hourHand.id = "hourHand";
    minuteHand.id = "minuteHand";
    secondHand.id = "secondHand";

    hourHand.classList.add("hands", "thick");
    minuteHand.classList.add("hands", "thick");
    secondHand.classList.add("hands");
    dayNDate.classList.add("text");

    dayNDate.append(dayText);
    dayNDate.append(space);
    dayNDate.append(dateText);

    clock.append(dayNDate);
    clock.append(hourHand);
    clock.append(minuteHand);
    clock.append(secondHand);
}

myClock();