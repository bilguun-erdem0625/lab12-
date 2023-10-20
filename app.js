/*let utas = {
	ungu : "har",
	helber: "dorvoljin",
	brand : "brand",
	on: "2023",
	broken : false,
	call : function(){
		console.log("calling");
	}
}
console.log(utas);
console.log(utas.ungu);
console.log(utas.call);
utas.call();
let hun = {
		"ner" : "bilguun erdem",
		nas : 23,
		gerder : "eregtei",
		job : "suragch",
		address : {
			nation :"mongolia",
			country :"ulaanbatar",
			district : "zaisan",
			aparment : {
			orts : "1",
			toot : "39",
		},
},
	great : function(){
		console.log("hi,my name"+this.ner);
		console.log(`my age${this.nas}`);
		console.log(`bi ${this.address.nation}`);
	}
}
console.log(hun.address.aparment.toot);
hun.great();
let huuhed  = {
	ovog : hun,
	ner : "bat",
	nas : 15,
	address : hun.address
}
console.log(huuhed.ovog.ner);

let bookstore = {
	book1  : {
		name : "name1",
		author : "bagii",
		number : 200,
		read : true
	},
	book2  : {
		name : "name2",
		author : "bat",
		number : 234,
		read : true
	},
	book3  : {
		name : "name3",
		author : "bold",
		number : 116,
		read : true
	},
	book4  : {
		name : "name4",
		author : "suvd",
		number : 504,
		read : true
	},
	book5  : {
		name : "name5",
		author : "bogd",
		number : 92,
		read : true
	},
}
console.log(bookstore);
for(key in bookstore){
	console.log(key);
	console.log(bookstore[key].name);
	if(bookstore[key].read == false){
		console.log(bookstore[key].name);
	}
	
	if(bookstore[key].number>150){
		console.log(bookstore[key].number);
	}
	if(bookstore[key].read == false && bookstore[key].number >= 150){
		console.log(bookstore[key].name);
	}
}*/
let company = {
	a1 : {
		ner:"bat",
		huis:"er",
		dugaar:8020900,
		nas:21,
	},
	a2 : {
		ner:"eegii",
		huis:"em",
		dugaar:95660900,
		nas:25,
	},
	a3 : {
		ner:"toroo",
		huis:"er",
		dugaar:80050540,
		nas:23,
	},
	a4 : {
		ner:"gambaa",
		huis:"er",
		dugaar:95990900,
		nas:19,
	},
	a5 : {
		ner:"eegii",
		huis:"em",
		dugaar:9020900,
		nas:34,
	},
	a6 : {
		ner:"manlai",
		huis:"em",
		dugaar:80209999,
		nas:30,
	},
	a7 : {
		ner:"hsln",
		huis:"em",
		dugaar:80336609,
		nas:29,
	},
	a8 : {
		ner:"moojg",
		huis:"er",
		dugaar:92990700,
	},
	a9 : {
		ner:"bat",
		huis:"er",
		dugaar:96690000,
		nas:21,
	},
	a10 : {
		ner:"baagii",
		huis:"er",
		dugaar:80085005,
		nas:26,
	},

}
for(key in company){
	console.log(key);
	console.log(company[key].ner);
	
	if(company[key].nas>25 && company[key].huis == "em"){
		console.log(company[key].nas);
	}
	if(company[key].dugaar>90000000 )
		console.log(company[key].dugaar);
	
}