// Make an ATM
class ATM {
    constructor(type){
        this.type = type;
        this.money = 0;
        this.transactionHistory = []
    }

    withdraw(input){
        this.money-= input;
        this.transactionHistory.push( {type: 'Withdraw' ,amount: input })

    }

    deposit(input){
        this.money+= input;
        this.transactionHistory.push( {type: 'Deposit' ,amount: input })
    }

    showBalance(){
        console.log(this.money);
    }

}

const atm = new ATM ();
atm.deposit(1500);
atm.showBalance();
console.log(atm.transactionHistory);
atm.withdraw(200);
atm.showBalance();
console.log(atm.transactionHistory); 


// Create a RecordAlbums 
class RecordAlbums {
        constructor(artistName, albumName, songs, currentSong) {
            this.artistName = artistName
            this.albumName = albumName
            this.songs = songs
            this.currentSong = currentSong
        }
        nextSong() {
            let i = this.songs.length
            let index = parseInt(this.songs.indexOf(this.currentSong));
    
            if (index === i - 1) { console.log('next song is: ' + this.songs[0]) }
    
            else {
                let index = parseInt(this.songs.indexOf(this.currentSong));
                let nextSong = index + 1
                console.log('next song is: ' + this.songs[nextSong])
            }
        }
        previousSong() {
            let i = this.songs.length
            let index = parseInt(this.songs.indexOf(this.currentSong));
    
            if (index === 0) { console.log('previous song is: ' + this.songs[i - 1]) }
    
            else {
                let index = parseInt(this.songs.indexOf(this.currentSong));
                let prevSong = index - 1
                console.log('next song is: ' + this.songs[prevSong])
            }
        }
        get getArtistName() {
            return this.artistName
        }
        set setArtistName(newName) {
            return this.name = newName
        }
    
        get getAlbumName() {
            return this.albumName
        }
        set setAlbumName(newName) {
            return this.albumName = newName
        }
    
        get getSongs() {
            return this.albumName
        }
        set setSongs(newName) {
            return this.songs = newName
        }
    }
    
    let songs = new RecordAlbums('Bob Marley', 'One Love', ['War', 'Three Little Birds', 'Natural Mystic', 'Redemption Song'], 'Redemption Song')
    console.log(songs)
    console.log('Current Song is: ' + songs.currentSong)
    songs.nextSong()
    songs.previousSong()

// ES6 Classes Body Shop 

class Car {
    constructor(make,model,year,color,seats){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.seats = seats;
    this.previousOwners = [];
    this.owner = 'Ford Company';
    this.running=false;
    this.passengers = [];
    }

    sell (newOwner){
        this.previousOwners.push(this.owner)
        return this.owner = newOwner;
    }

    paint (newColor){
        return this.color = newColor;
    }

    start(){
        this.running = true;
    }

    off(){
        this.running = false;
    }

    driveTo(destination){
        if(this.running){
            console.log (`Driving to ${destination}`);
            return true;
        }
        else return false;
    }

    park (){
        if(!this.running){
            console.log (`Parked !!`);
            return true;
        }
        else return false;
    }

    pickUp(name){
    if (this.running && this.passengers.length + 1  < this.seats){
        console.log(`Driving to pickup ${name}`);
        this.passengers.push(name);
        return true;
    }
    else return false;
    }

    dropOff(name){
        if(this.running){
            let i = this.passengers.indexOf(name);
            if(i !== -1){
                console.log(`Driving to drop off ${name}`);
                this.passengers.splice(i,1);
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }


    }

    passengerCount(){
        return this.passengers.length;
    }

}


const mycar = new Car('Ford', 'F150', '2013','Brown','4');
mycar.sell("Mohd")
console.log(mycar);
console.log(mycar.running);

mycar.paint("black");
console.log(mycar);

mycar.start();
console.log(mycar.running);

mycar.driveTo("Norway");
mycar.pickUp("Ammar");
mycar.pickUp("Mahmood");

console.log(mycar);
console.log(mycar.passengerCount());
mycar.dropOff("Ali");
console.log(mycar);

mycar.off();
console.log(mycar.running);
mycar.park(); 