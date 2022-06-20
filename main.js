var points = new OmegaNum("0");
var persec = new OmegaNum("1");
var cost1 = new OmegaNum("100");
const inf1 = new OmegaNum("1.8e308")
const inf2 = new OmegaNum("1.8e30008")
const inf3 = new OmegaNum("1.8e3000000008")
const inf4 = new OmegaNum("ee308")

setInterval(() => {
    points = points.add(persec)
    document.getElementById("points").innerHTML = "You Have " + points + " Points"
}, 10);

document.getElementById("cost1").onclick = () => {
    if (points.gte(cost1) == true) {
        points = points.sub(cost1)
        persec = persec.mul(1.2)
        cost1 = cost1.mul(1.25)
        document.getElementById("cost1").innerHTML = "Cost:" + cost1
    } else {
     alert("not enough point")   
    }
}