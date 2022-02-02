function Katt() {
    ertek.innerHTML = ""
    var modell =  document.getElementById("modell").value
    var ido = document.getElementById("ido").value

    if (ido > 1440 || ido <= 0)
    {
        alert("A megadott idő nem lehetséges, kérem adjon meg egy értéket 1 és 1440 között!")
    }

    else if (modell === "Audi E-tron" )
    {
        var audi = Math.round(ido/(8.5*60)*326*100)/100
        if (audi <= 326)
        {
            ertek.innerHTML = audi+" km"
            ertek.innerHTML += '<br><img src="images/audi.jpg" alt="Audi E-tron" title="Audi E-tron"></img>'
        }
        else
        {
            ertek.innerHTML = 326+" km"+" (max)"
            ertek.innerHTML += '<br><img src="images/audi.jpg" alt="Audi E-tron" title="Audi E-tron"></img>'
        }
    }

    else if (modell === "BMW i3s 120Ah" )
    {
        var bmw = Math.round(ido/(4.5*60)*232*100)/100
        if (bmw <= 232)
        {
            ertek.innerHTML = bmw+" km"
            ertek.innerHTML += '<br><img src="images/bmw.jpg" alt="BMW i3s 120Ah" title="BMW i3s 120Ah"></img>'
        }
        else
        {
            ertek.innerHTML = 232+" km"+" (max)"
            ertek.innerHTML += '<br><img src="images/bmw.jpg" alt="BMW i3s 120Ah" title="BMW i3s 120Ah"></img>'
        }
    }

    else if (modell === "Fiat 500e" )
    {
        var fiat = Math.round(ido/(4*60)*130*100)/100
        if (fiat <= 130)
        {
            ertek.innerHTML = fiat+" km"
        ertek.innerHTML += '<br><img src="images/fiat.jpg" alt="Fiat 500e" title="Fiat 500e"></img>'
        }
        else 
        {
            ertek.innerHTML = 130+" km"+" (max)"
            ertek.innerHTML += '<br><img src="images/fiat.jpg" alt="Fiat 500e" title="Fiat 500e"></img>'
        }
    }

    else if (modell === "Hyundai Ioniq" )
    {
        var hyu = Math.round(ido/(6.25*60)*294*100)/100
        if (hyu <= 294)
        {
            ertek.innerHTML = hyu+" km"
            ertek.innerHTML += '<br><img src="images/hyu.jpg" alt="Hyundai Ioniq" title="Hyundai Ioniq"></img>' 
        }
        else
        {
            ertek.innerHTML = 294+" km"+" (max)"
            ertek.innerHTML += '<br><img src="images/hyu.jpg" alt="Hyundai Ioniq" title="Hyundai Ioniq"></img>'
        }
    }

    else if (modell === "Nissan Leaf" )
    {
        var nissan = Math.round(ido/(9.25*60)*172*100)/100
        if (nissan <= 172)
        {
            ertek.innerHTML = nissan+" km"
        ertek.innerHTML += '<br><img src="images/nissan.jpg" alt="Nissan Leaf" title="Nissan Leaf"></img>'
        }
        else
        {
            ertek.innerHTML = 172+" km"+" (max)"
            ertek.innerHTML += '<br><img src="images/nissan.jpg" alt="Nissan Leaf" title="Nissan Leaf"></img>'
        }
    }

    else if (modell === "Renault Zoe" )
    {
        var renault = Math.round(ido/(2*60)*248*100)/100
        if (renault <= 248)
        {
            ertek.innerHTML = renault+" km"
        ertek.innerHTML += '<br><img src="images/renault.jpg" alt="Renault Zoe" title="Renault Zoe"></img>'
        }
        else
        {
            ertek.innerHTML = 248+" km"+" (max)"
            ertek.innerHTML += '<br><img src="images/renault.jpg" alt="Renault Zoe" title="Renault Zoe"></img>'
        }
    }

    else if (modell === "Tesla Model 3" )
    {
        var tesla = Math.round(ido/(5.75*60)*328*100)/100
        if (tesla <= 328)
        {
            ertek.innerHTML = tesla+" km"
            ertek.innerHTML += '<br><img src="images/tesla.jpg" alt="Tesla Model 3" title="Tesla Model 3"></img>' 
        }
        else
        {
            ertek.innerHTML = 328+" km"+" (max)"
            ertek.innerHTML += '<br><img src="images/tesla.jpg" alt="Tesla Model 3" title="Tesla Model 3"></img>'
        }
    }

    else if (modell === "Volkswagen e-Golf" )
    {
        var volks = Math.round(ido/(4.5*60)*190*100)/100
        if (volks <= 328)
    {
        ertek.innerHTML = volks+" km"
        ertek.innerHTML += '<br><img src="images/volks.jpg" alt="Volkswagen e-Golf" title="Volkswagen e-Golf"></img>'
    }
    else
    {
        ertek.innerHTML = 190+" km"+" (max)"
        ertek.innerHTML += '<br><img src="images/volks.jpg" alt="Volkswagen e-Golf" title="Volkswagen e-Golf"></img>'
    }
    }
}