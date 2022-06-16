// hard coding data starts now---------------------------------

let carsData =[
    {
    image_url:
     "https://imgd.aeplcdn.com/370x208/n/cw/ec/41197/hyundai-verna-right-front-three-quarter7.jpeg?q=85" ,
    name:"Hyundai i10",
    fuel_type:"Petrol",
    brand:"Hyundai",
    city:"Mumbai",
    cartype:"Hatchback",
    price_per_month:11400,
    strikedoffprice:13500,
    avail: "Available from  17 Jun 2022",
    work: "Manual",
    seats:"5 seats"
    },
    {
    image_url:
      "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
    name:"Hyundai kona",
    fuel_type:"Diesel",
    brand:"Honda",
    city:"Hyderabad",
    cartype:"SUV/MUV",
    price_per_month:10400,
    strikedoffprice:12500,
    avail:"Available from  17 Jun 2022",
    work: "Manual",
    seats:"5 seats"
    },
    {
    image_url:
      "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_eon.jpg",
    name:"Hyundai i20",
    brand:"Hyundai",
    city:"Chennai",
    fuel_type:"Diesel",
    cartype:"Hatchback",
    price_per_month:12400,
    strikedoffprice:15500,
    avail:"Available from  17 Jun 2022",
    work: "Manual",
    seats:"5 seats"
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Maruti_suzuki_swift.jpg",
    name:"Hyundai verna",
    brand:"Maruti",
    city:"Delhi",
    fuel_type:"Petrol",
    cartype:"Sedan",
    price_per_month:12400,
    strikedoffprice:13500,
    avail: "Available from  22 Jun 2022",
    work: "Automatic",
    seats:"7 seats"
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Hyundai_grand_i10.jpg",
    name:"Hyundai i10",
    brand:"Honda",
    city:"Bangalore",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:13500,
    strikedoffprice:14500,
    avail:"Available from  17 Jun 2022",
    work: "Automatic",
    seats:"5 seats"
    },
    {
    image_url: 
     "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/SUV_new/Mahindra_XUV_300.jpg",
    name:"Hyundai i10",
    brand:"Hyundai",
    city:"Bangalore",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:10800,
    strikedoffprice:12900,
    avail: "Available from  24 Jun 2022",
    work: "Manual",
    seats:"7 seats"
    },
    {
    image_url: 
     "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
    name:"Hyundai i10",
    brand:"Hyundai",
    city:"Hyderabad",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:11800,
    strikedoffprice:13400,
    avail:"Available from  17 Jun 2022",
    work: "Automatic",
    seats:"5 seats"
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Maruti_suzuki_alto_k10.jpg",
    name:"Hyundai grand",
    brand:"Hyundai",
    city:"Delhi",
    fuel_type:"Diesel",
    cartype:"SUV/MUV",
    price_per_month:11900,
    strikedoffprice:13700,
    avail:"Available from  17 Jun 2022",
    work: "Manual",
    seats:"5 seats"
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
    name:"Hyundai creta",
    brand:"Honda",
    city:"Mumbai",
    fuel_type:"Diesel",
    cartype:"Sedan",
    price_per_month:11500,
    strikedoffprice:12500,
    avail:"Available from 18 Jun 2022",
    work: "Automatic",
    seats:"7 seats"
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Maruti_suzuki_swift.jpg",
    name:"Hyundai creta",
    brand:"Hyundai",
    city:"Chennai",
    fuel_type:"Petrol",
    cartype:"Sedan",
    price_per_month:11500,
    strikedoffprice:13500,
    avail:"Available from 18 Jun 2022",
    work: "Manual",
    seats:"5 seats"
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Maruti_suzuki_celerio.jpg",
    name:"Hyundai V-RV",
    brand:"Hyundai",
    city:"Hyderabad",
    fuel_type:"Diesel",
    cartype:"Sedan",
    price_per_month:15500,
    strikedoffprice:16500,
    avail:"Available from 18 Jun 2022",
    work: "Manual",
    seats:"5 seats"
    },
    {
    
    image_url:"https://static.autox.com/uploads/cars/2017/10/mahindra-kuv100-nxt-10-october-2017.jpg",   
    name:"Hyundai neos",
    brand:"Hyundai",
    city:"Hyderabad",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:16500,
    strikedoffprice:17500,
    avail:"Available from 18 Jun 2022",
    work: "Automatic",
    seats:"7 seats"
    },
    {
    image_url:"https://imgd.aeplcdn.com/227x128/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?q=85 ",
    name:"Mahindra thar",
    brand:"Mahindra",
    city:"Kolkata",
    fuel_type:"Diesel",
    cartype:"SUV/MUV",
    price_per_month:11300,
    strikedoffprice:12400,
    avail:"Available from 18 Jun 2022",
    work: "Manual",
    seats:"5 seats"
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Maruti_suzuki_baleno.jpg",
    name:"Mahindra KUV100",
    brand:"Honda",
    city:"Hyderabad",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:10900,
    strikedoffprice:12800,
    avail: "Available from  24 Jun 2022",
    work: "Automatic",
    seats:"5 seats"
    },
    {
    image_url:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/21497/kuv100-nxt-exterior-right-front-three-quarter-64047.jpeg?q=85",
    name:"Mahindra verito",
    brand:"Mahindra",
    city:"Bangalore",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:10500,
    strikedoffprice:11700,
    avail:"Available from 18 Jun 2022",
    work: "Automatic",
    seats:"5 seats"
    },
    {
    image_url:"https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
    name:"Hyundai Verna",
    brand:"Honda",
    city:"Delhi-NCR",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:10500,
    strikedoffprice:11700,
    avail:"Available from 18 Jun 2022",
    work: "Automatic",
    seats:"5 seats"
    },
    {
    image_url:"https://imgd.aeplcdn.com/227x128/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg?isig=0&q=85 ",
    name:"Mahindra XUV",
    brand:"Mahindra",
    city:"Hyderabad",
    fuel_type:"Petrol",
    cartype:"SUV/MUV",
    price_per_month:13300,
    strikedoffprice:14200,
    avail:"Available from  19 Jun 2022",
    work: "Automatic",
    seats:"5 seats"
    },
    {
    image_url:"https://imgd.aeplcdn.com/227x128/n/cw/ec/31883/scorpio-exterior-right-front-three-quarter-2.jpeg?q=85 ",
    name:"Mahindra scorpio",
    brand:"Mahindra",
    city:"Chennai",
    fuel_type:"Diesel",
    cartype:"SUV/MUV",
    price_per_month:14200,
    strikedoffprice:16400,
    avail:"Available from  19 Jun 2022",
    work: "Automatic",
    seats:"5 seats"
    },
    {
    image_url:"https://imgd.aeplcdn.com/227x128/n/cw/ec/45933/mahindra-bolero-right-front-three-quarter1.jpeg?q=85 ",
    name:"Mahindra balero",
    brand:"Maruti",
    city:"Mumbai",
    fuel_type:"Diesel",
    cartype:"SUV/MUV",
    price_per_month:14500,
    strikedoffprice:16500,
    avail:"Available from  19 Jun 2022",
    work: "Manual",
    seats:"5 seats"
    },
    {
    image_url:"https://imgd.aeplcdn.com/227x128/n/cw/ec/49114/marazzo-exterior-right-front-three-quarter-5.jpeg?isig=0&q=85 ",
    name:"Mahindra morranzo",
    brand:"Mahindra",
    city:"Delhi",
    fuel_type:"Petrol",
    cartype:"SUV/MUV",
    price_per_month:11500,
    strikedoffprice:13500,
    avail: "Available from  22 Jun 2022",
    work: "Manual",
    seats:"7 seats"
    },
    
    {
    image_url:"https://imgd.aeplcdn.com/227x128/n/cw/ec/33266/alturas-g4-exterior-right-front-three-quarter-2.jpeg?q=85 ",
    name:"Mahindra Altarus",
    brand:"Maruti",
    city:"Bangalore",
    fuel_type:"Diesel",
    cartype:"SUV/MUV",
    price_per_month:17500,
    strikedoffprice:19500,
    avail: "Available from  22 Jun 2022",
    work: "Manual",
    seats:"7 seats"
    },
    {
    image_url:"https://imgd.aeplcdn.com/227x128/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?q=85 ",
    name:"Mahindra thar",
    brand:"Mahindra",
    city:"Kolkata",
    fuel_type:"Diesel",
    cartype:"SUV/MUV",
    price_per_month:11300,
    strikedoffprice:12400,
    avail: "Available from  22 Jun 2022",
    work: "Manual",
    seats:"7 seats"
    },
    {
    image_url:"https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Sedan_new/Maruti_suzuki_dzire.jpg",
    name:"Mahindra KUV100",
    brand:"Mahindra",
    city:"Hyderabad",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:10900,
    strikedoffprice:12800,
    avail:"Available from  22 Jun 2022",
    work: "Automatic",
    seats:"7 seats"
    },
    {
    image_url:"https://imgd-ct.aeplcdn.com/370x208/n/cw/ec/21497/kuv100-nxt-exterior-right-front-three-quarter-64047.jpeg?q=85",
    name:"Mahindra verito",
    brand:"Mahindra",
    city:"Bangalore",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:10500,
    strikedoffprice:11700,
    avail: "Available from  24 Jun 2022",
    work: "Automatic",
    seats:"7 seats"
    },
    {
    image_url:"https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/Sedan_new/Hyundai_verna.jpg",
    name:"Hyundai Verna",
    brand:"Hyundai",
    city:"Delhi-NCR",
    fuel_type:"Petrol",
    cartype:"Hatchback",
    price_per_month:10500,
    strikedoffprice:11700,
    avail: "Available from  24 Jun 2022",
    work: "Automatic",
    seats:"7 seats"
    },
  ];  
    
  localStorage.setItem("carsData",JSON.stringify(carsData)) ;
    
  // hard coding data ends here------------------------------------
  
  //taking city name from local storage "cityname"-------
  
  let getVal = JSON.parse(localStorage.getItem("cityname"));
  document.getElementById("filtercitybox").value = getVal;
  
  //--------ends---------
  
  let carsData2 = JSON.parse(localStorage.getItem("carsData")) || [];
  displayData(carsData2);
  
  let total = carsData2.length;
  document.getElementById("parah2").innerText=`${total} Cars for Rental in ${getVal} `
  
  // .working on filters-------
  
  function sortprice(){
    var selected=document.querySelector("#sorting").value
    if(selected=="Htl"){
        carsData2.sort(function(a,b){
            return Number(b.price_per_month)-Number(a.price_per_month);
        });
    }
    
    if(selected=="Lth"){
        carsData2.sort(function(a,b){
            return Number(a.price_per_month)-Number(b.price_per_month);
        });
    }
    displayData(carsData2)
  }
  
  function selectcity(){
    let selected =document.querySelector("#filtercitybox").value;
    let filteredListbycity= carsData2.filter(function(elem){
        return elem.city ==selected
    })
    let totalcity = filteredListbycity.length;
    document.getElementById("parah2").innerText=`${totalcity} Cars for Subscription in ${selected} `
    displayData (filteredListbycity);
  }
   
  function selectminprice(){
    let selected =document.querySelector("#minprice").value;
    let filteredListbyprice= carsData2.filter(function(elem){
        return elem.price_per_month >=selected
    })
  displayData (filteredListbyprice);
  }
  function selectmaxprice(){
    let selected =document.querySelector("#maxprice").value;
    let filteredListbymaxprice= carsData2.filter(function(elem){
        return elem.price_per_month <=selected  
    })
    selectminprice();
  displayData (filteredListbymaxprice);
  }
  
  function carType(){
    if(document.querySelector(".segmentCheck").checked==true){
      let selected =document.querySelector(".segmentCheck").value;
      let filteredListbycartype = carsData2.filter(function(elem){
          return elem.cartype==selected;
      })
    displayData (filteredListbycartype);
    }
  }
  
  function fuel_type(){
    if(document.querySelector(".fuel_type").checked==true){
      let selected =document.querySelector(".fuel_type").value;
      let filteredListbyfuel_type = carsData2.filter(function(elem){
        return elem.fuel_type ==selected
    })
  displayData (filteredListbyfuel_type);
  } 
  }
  
  function work_type(){
    if(document.querySelector(".work_type").checked==true){
      let selected =document.querySelector(".work_type").value;
      let filteredListbyfuel_type = carsData2.filter(function(elem){
        return elem.work==selected
    })
  displayData (filteredListbyfuel_type);
  } 
  
  }
  function selectbrand(){
    if(document.querySelector(".brand_type").checked==true){
      var selected =document.querySelector(".brand_type").value;
      var filteredListbybrand = carsData2.filter(function(elem){
          return elem.brand ==selected
      })
    displayData (filteredListbybrand);
    }
  }
  
   
  
  // mapping cars data----------------------------------------------
  
  function displayData(carsData2){
  
    document.querySelector("#showCarsData").innerHTML="";
  
    carsData2.map(function(elem){
  
      let box = document.createElement("div");
      box.setAttribute("class","boxdiv");
      
      let image = document.createElement("img");
      image.src = elem.image_url; 
      image.setAttribute("class","image_url");
  
      let name = document.createElement("h3");
      name.setAttribute("class","namediv");
      name.innerText= elem.name; 

      let seats = document.createElement("p") 
      seats.innerText= elem.seats;
  
      let fuel_type = document.createElement("p")
      fuel_type.textContent=`${elem.fuel_type}`;
      fuel_type.setAttribute("class","fuel_typediv");
  
      let manual = document.createElement("p") 
      manual.innerText= elem.work;
      manual.setAttribute("class","manualdiv");
  
      let box1 = document.createElement("div");
      box1.setAttribute("class","box1div");
      box1.append(manual,fuel_type,seats);

      let brand = document.createElement("div") 
      brand.innerText= elem.brand;
      brand.setAttribute("class","branddiv");

      let city = document.createElement("div") 
      city.innerText= elem.city;
      city.setAttribute("class","citydiv");

      let cartype = document.createElement("div") 
      cartype.innerText= elem.cartype;
      cartype.setAttribute("class","cartypediv");

      let box2 = document.createElement("div");
      box2.setAttribute("class","box2div");
      box2.append(brand,city,cartype);
  
      let price =document.createElement("div")
      price.setAttribute("class","pricediv");
      price.innerText = `₹`+ elem.price_per_month +`/month`;
       

      let bookBtn = document.createElement("button")
      bookBtn.setAttribute("class","bookBtn");
      bookBtn.innerText="Book";
      bookBtn.addEventListener("click",function(){
          bookNow(elem);
      })
      
      let box3 = document.createElement("div");
      box3.setAttribute("class","box3div");
      box3.append(price,bookBtn);
      
      box.append(name,image,box1,box2,box3)
      
      document.getElementById("showCarsData").append(box);
  
    })
  
  }

function bookNow(elem){
    let carArr = [];
    carArr.push(elem)
    localStorage.setItem("carItems",JSON.stringify(carArr));
    window.location.href="Rentdetails.html";
}


  
  
    