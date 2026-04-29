function Services() {

const services = [
"IT Solutions",
"Workforce Solutions",
"Civil & Construction",
"Machinery & Equipment",
"Transportation & Logistics",
"Industrial Supplies",
"Finance & Insurance",
"Accounts & Taxation"
];

return (
<>
<section className="services">

<h2>Our Services</h2>

<div className="grid">
{services.map((item,i)=>(
<div key={i} className="card">
<h3>{item}</h3>
<p>Professional consultancy services</p>
<button>Learn More</button>
</div>
))}
</div>

</section>

<style jsx>{`
.services{
padding:120px 60px;
background:#F8FAFC;
width:100%;
}

h2{
text-align:center;
margin-bottom:50px;
font-size:36px;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
}

.card{
background:white;
padding:30px;
border-radius:8px;
box-shadow:0 5px 20px rgba(0,0,0,.05);
text-align:center;
}

.card button{
margin-top:15px;
background:#0B1C3D;
color:white;
border:none;
padding:10px 18px;
}

@media(max-width:900px){
.services{
padding:80px 20px;
}
}

`}</style>

</>
)
}

export default Services