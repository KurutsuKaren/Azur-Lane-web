function Click () {
    console.log('Creating')

    AddShip("USS Benson", "Rare", 6, "Eagle Union", "Destroyer")
}

function AddShip (name, rarity, ratio, faction, type) {
    var main_container = document.getElementById("main-container")

        var contenedor = document.createElement("div")
        contenedor.className = "contenedor"
        main_container.appendChild(contenedor)

            var contenedorimg = document.createElement("div")
            contenedorimg.className = "contenedorimg"
            contenedor.appendChild(contenedorimg)

                var rareza = document.createElement("div")
                rareza.setAttribute("data-toggle", "tooltip")
                rareza.className = "rareza"
                rareza.title = rarity
                contenedorimg.appendChild(rareza)

                var nombreavatar = document.createElement("div")
                nombreavatar.className = "nombreavatar"
                contenedorimg.appendChild(nombreavatar)

                    var avatarname = document.createElement("span")
                    avatarname.id = "avatarname"
                    avatarname.innerText = name
                    nombreavatar.appendChild(avatarname)
                
                var avatar = document.createElement("img")
                avatar.src = "img/guarrilla.png"
                avatar.className = "avatar"
                contenedorimg.appendChild(avatar)

            var informacion = document.createElement("div")
            informacion.className = "informacion"
            contenedor.appendChild(informacion)

                var otherinfo = document.createElement("div")
                otherinfo.className = "otherinfo"
                informacion.appendChild(otherinfo)

                    var ship_drop_ratio = document.createElement("div")
                    ship_drop_ratio.className = "ship_drop_ratio"
                    otherinfo.appendChild(ship_drop_ratio)

                        var drop_ratio_p = document.createElement("p")
                        var ratio = String(ratio)
                        drop_ratio_p.innerText = "Drop rate"
                        drop_ratio_p.setAttribute("style", "text-align: center;font-weight: bold;")
                        otherinfo.appendChild(drop_ratio_p)

                            var center = document.createElement("center")
                            drop_ratio_p.appendChild(center)

                                var barra_progress = document.createElement("div")
                                barra_progress.className = "barra progress"
                                center.appendChild(barra_progress)

                                    var progressbar = document.createElement("div")
                                    progressbar.className = "barra progress-bar progress-bar-striped progress-bar-animated bg-dark"
                                    progressbar.setAttribute("style", "width:75%")
                                    progressbar.innerText = ratio + "%"
                                    barra_progress.appendChild(progressbar)

                    var separacion = document.createElement("hr")
                    separacion.id = "separacion"
                    otherinfo.appendChild(separacion)

                    var ship_others = document.createElement("div")
                    ship_others.className = "ship_others"
                    otherinfo.appendChild(ship_others)

                        var ship_faction = document.createElement("div")
                        ship_faction.className = "ship_faction"
                        ship_others.appendChild(ship_faction)

                            var faction_p = document.createElement("p")
                            faction_p.innerText = "Faction"
                            ship_faction.appendChild(faction_p)

                            var hr1 = document.createElement("hr")
                            ship_faction.appendChild(hr1)

                            var shipfaction = document.createElement("span")
                            shipfaction.className = "others"
                            shipfaction.id = "shipfaction"
                            shipfaction.innerText = faction
                            ship_faction.appendChild(shipfaction)

                        var ship_type = document.createElement("div")
                        ship_type.className = "ship_type"
                        ship_others.appendChild(ship_type)

                            var type_p = document.createElement("p")
                            type_p.innerText = "Type"
                            ship_type.appendChild(type_p)

                            var hr2 = document.createElement("hr")
                            ship_type.appendChild(hr2)

                            var shiptype = document.createElement("span")
                            shiptype.className = "others"
                            shiptype.id = "shiptype"
                            shiptype.innerText = type
                            ship_type.appendChild(shiptype)

}