var ropeDemo = {

    data: {
        fps: +60,
        intervalId: null,
        gravity: +20.5,
        pixelsPerMeter: +150
    },

    context: {
        canvas: null,
        drawingContext: null,
        size: { w: +0, h: +0 },
        center: { x: +0, y: +0 },
        mouse: { x: +0, y: +0 },
        isGrabbing: false,
        stopped: false
    },



    Step: function () {
        ropeDemo.ThinkOverride();
        if (Math.abs(ropeDemo.rope.coeff)>0.0001 || isNaN(ropeDemo.rope.coeff)){
            ropeDemo.DrawOverride();

        }else{
            ropeDemo.Stop();
        }
    },


    Start: function () {
        ropeDemo.StartOverride();

        ropeDemo.data.intervalId = setInterval(ropeDemo.Step, +1000 / ropeDemo.data.fps);
    },

    Stop: function () {
        clearInterval(ropeDemo.data.intervalId);
    },

    Initialize: function () {
        // Gather data

        ropeDemo.context.canvas = document.getElementById("RopeDrawingArea");

        ropeDemo.context.canvas.width = window.innerWidth;
        ropeDemo.context.canvas.height = window.innerHeight;
        ropeDemo.context.size.w = window.innerWidth;
        ropeDemo.context.size.h = window.innerHeight;
                        ropeDemo.context.drawingContext = ropeDemo.context.canvas.getContext("2d");


        ropeDemo.context.center.x = ropeDemo.context.size.w * 0.5;
        ropeDemo.context.center.y = ropeDemo.context.size.h * +0;

        //future grabbing implementation:
        ropeDemo.context.canvas.onmousemove = function (e) {
            if (e.offsetX) {
                ropeDemo.context.mouse.x = e.offsetX;
                ropeDemo.context.mouse.y = e.offsetY;
            } else if (e.layerX) {
                ropeDemo.context.mouse.x = e.layerX;
                ropeDemo.context.mouse.y = e.layerY;
            }
        };

        ropeDemo.context.canvas.onmousedown = function (e) {
            ropeDemo.context.isGrabbing = true;
        };

        ropeDemo.context.canvas.onmouseup = function (e) {
            ropeDemo.context.isGrabbing = false;
        };

        ropeDemo.context.canvas.onmouseout = function (e) {
            ropeDemo.context.isGrabbing = false;
        };


        

        
         

        // Start application
        ropeDemo.Start();
            
        

    }
};

