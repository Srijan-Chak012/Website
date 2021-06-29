document.getElementById("link1").style.background = "#4a4e50";
document.getElementById("link1").addEventListener("mouseover", function () {
    document.getElementById("link1").style.background = "black";
})

document.getElementById("link1").addEventListener("mouseout", function () {
    document.getElementById("link1").style.backgroundColor = "#4a4e50";
});

document.getElementById("link2").style.background = "#4a4e50";
document.getElementById("link2").addEventListener("mouseover", function () {
    document.getElementById("link2").style.background = "black";
});

document.getElementById("link2").addEventListener("mouseout", function () {
    document.getElementById("link2").style.backgroundColor = "#4a4e50";
});

document.getElementById("link3").style.background = "#4a4e50";
document.getElementById("link3").addEventListener("mouseover", function () {
    document.getElementById("link3").style.background = "black";
});

document.getElementById("link3").addEventListener("mouseout", function () {
    document.getElementById("link3").style.backgroundColor = "#4a4e50";
});

window.addEventListener("scroll", function () {

    if (window.scrollY > 0) {
        document.getElementById("link1").style.backgroundColor = "white";
        document.getElementById("link1").addEventListener("mouseover", function () {
            document.getElementById("link1").style.background = "#e5a693";
        })

        document.getElementById("link1").addEventListener("mouseout", function () {
            document.getElementById("link1").style.backgroundColor = "white";
        });

        document.getElementById("link2").style.backgroundColor = "white";
        document.getElementById("link2").addEventListener("mouseover", function () {
            document.getElementById("link2").style.background = "#e5a693";
        })

        document.getElementById("link2").addEventListener("mouseout", function () {
            document.getElementById("link2").style.backgroundColor = "white";
        });

        document.getElementById("link3").style.backgroundColor = "white";
        document.getElementById("link3").addEventListener("mouseover", function () {
            document.getElementById("link3").style.background = "#e5a693";
        });

        document.getElementById("link3").addEventListener("mouseout", function () {
            document.getElementById("link3").style.backgroundColor = "white";
        });
    }

    else {
        document.getElementById("link1").style.background = "#4a4e50";
        document.getElementById("link1").addEventListener("mouseover", function () {
            document.getElementById("link1").style.background = "black";
        })

        document.getElementById("link1").addEventListener("mouseout", function () {
            document.getElementById("link1").style.backgroundColor = "#4a4e50";
        });

        document.getElementById("link2").style.background = "#4a4e50";
        document.getElementById("link2").addEventListener("mouseover", function () {
            document.getElementById("link2").style.background = "black";
        });

        document.getElementById("link2").addEventListener("mouseout", function () {
            document.getElementById("link2").style.backgroundColor = "#4a4e50";
        });

        document.getElementById("link3").style.background = "#4a4e50";
        document.getElementById("link3").addEventListener("mouseover", function () {
            document.getElementById("link3").style.background = "black";
        });

        document.getElementById("link3").addEventListener("mouseout", function () {
            document.getElementById("link3").style.backgroundColor = "#4a4e50";
        });

        // document.getElementsByClassName("sticky").addEventListener("mouseover", function(){
        //     document.getElementsByClassName("sticky").style.background = "#e5a693";
        // });

        // document.getElementsByClassName("sticky").addEventListener("mouseout", function(){
        //     document.getElementsByClassName("sticky").style.background = "white";
        // });    
    }

});