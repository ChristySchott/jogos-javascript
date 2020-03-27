window.onload = function(){

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 80);

    const vel = 1;

    var vx = vy = 0;
    var px =10;
    var py = 15;
    var tp = 30;
    var quantidadePeca = 20;
    var macaX=macaY=15;

    var rastro = [];
    cauda = 3;

    function game(){
        px += vx;
        py += vy;
        if (px <0) {
            px = quantidadePeca-1;
        }
        if (px > quantidadePeca-1) {
            px = 0;
        }
        if (py < 0) {
            py = quantidadePeca-1;
        }
        if (py > quantidadePeca-1) {
            py = 0;
        }


        ctx.fillStyle = "black";
        ctx.fillRect(0,0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(macaX*tp, macaY*tp, tp,tp);

        ctx.fillStyle = "rgb(173, 156, 3)";
        for (var i = 0; i < rastro.length; i++) {
            ctx.fillRect(rastro[i].x*tp, rastro[i].y*tp, tp-1,tp-1);
            if (rastro[i].x == px && rastro[i].y == py)
            {
                vx = vy=0;
                cauda =3;
            }
        }

        rastro.push({x:px,y:py })
        while (rastro.length > cauda) {
            rastro.shift();
        }

        if (macaX==px && macaY==py){
            cauda++;
            macaX = Math.floor(Math.random()*quantidadePeca);
            macaY = Math.floor(Math.random()*quantidadePeca);
        }

    }

    function keyPush(event){

        switch (event.keyCode) {
            case 37: // Left
                vx = -vel;
                vy = 0;
                break;
            case 38: // up
                vx = 0;
                vy = -vel;
                break;
            case 39: // right
                vx = vel;
                vy = 0;
                break;
            case 40: // down
                vx = 0;
                vy = vel;
                break;			
            default:
                
                break;
        }


    }


}