let roomRootdiv = document.querySelector("#roomRoot");


let rooms = {
    lobby: {
        name: "Lobby",
        description: "Welcome to the Lenschire on Wisconsin Ave! This is where Lucy and her friend shared a studio apartment from July 2025 to June 2026. It was a terrible, dank place inhabited by some of the strangest people on Earth. Lets meet some of the neighbors!",
        souvenir: "the master key",
        linkedRooms: [{key:"msTurner", label:"Visit Ms. Turner"}]
    },
    msTurner: {
        name: "316: Ms. Turner",
        description: "This is Ms. Turner's apartment. She usually leaves the door wide open to show off her nice entry way decorated with a single dining chair and a pile of garbage. It's a mystery how she managed to fit a 10ft trampoline in this studio. Oh, and here is her collection of blonde wigs!",
        linkedRooms: [{key:"msTurnerCloset", label:"See Ms. Turner's Closet"}]
    },
    msTurnerCloset: {
        name: "Ms. Turner's Closet",
        description: "Ms. Turner has a few grandchildren that stay in the closet when they visit. They have to sandwich themselves between the wigs and magenta athleisure wear to make room for their sleeping bags.",
        souvenir: "a blonde wig",
        linkedRooms: [{key:"mrSmith", label:"Visit Mr. Smith"}]
    },
    mrSmith: {
        name: "314: Mr. Smith",
        description: "This is Mr. Smith's apartment. He actually got evicted a couple of months ago for owing the building $7,000, but the leasing office never followed up after posting that note publicly on his door. The smell of cigarettes booms throughout the space, made sense by the ashtrays scattered around that spill over with cigarette butts. Men come every morning at 5 o'clock and pound on the door looking for him. He must be bad news, let's get out of here!",
        souvenir: "a pack of cigarettes",
        linkedRooms: [{key:"lucy", label:"Visit Lucy & Claire"}]
    },
    lucy: {
        name: "315: Lucy & Claire",
        description: "This is Lucy's apartment. There's a cat that lives here in secret because a $500 pet deposit seemed a bit ridiculous. Claire also lives here but there was only enough room for 1 bed in the apartment, so she sleeps on the couch. Despite having given up on buying furniture, leaving them with the bare minimum, it sure is a tight space!",
        souvenir: "a dustbunny",
        linkedRooms: [{key:"lobby", label:"Return to Lobby"}]
    }
}

let currentRoom = rooms["lobby"];


function visualizeRooms(room) {
    roomRootdiv.innerHTML = "";

    let roomName = document.createElement("h1");
    roomName.innerHTML = room.name;
    roomRootdiv.append(roomName);

    let roomDescription = document.createElement("p");
    roomDescription.innerHTML = room.description;
    roomRootdiv.append(roomDescription);

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer"); // Dynamically create and apply CSS class in JavaScript learned from geeksforgeeks.org

    for (let i = 0; i < room.linkedRooms.length; i++) {
        let link = room.linkedRooms[i];
        let navButton = document.createElement("button");
        navButton.innerHTML = link.label    
        navButton.addEventListener("click", function() { // Passing an anonymous function learned from geeksforgeeks.org
            currentRoom = rooms[link.key];
            visualizeRooms(currentRoom);
        });
        buttonContainer.append(navButton);
    }
    roomRootdiv.append(buttonContainer);

    if (room.souvenir) {
        let souvenirButton = document.createElement("button");
        souvenirButton.innerHTML = "Take a souvenir!";
        souvenirButton.addEventListener("click", function(){
            roomDescription.innerHTML += "<br>";
            roomDescription.innerHTML += "<h2>You took " + room.souvenir + " as a souvenir!</h2>";
        });
        buttonContainer.append(souvenirButton);
    }
}

visualizeRooms(currentRoom);
