from adafruit_hid.mouse import Mouse

from adafruit_circuitplayground.express import cpx
import math

m = Mouse()
x, y, z = cpx.acceleration
x2 = x;
y2 = y;
z2 = z;
diff = 0


while True:
    x, y, z = cpx.acceleration
    val = math.floor((x-x2)*10)
    if 0.5 > x-x2 > 0.3:
        x2 = x;
        y2 = y;
        z2 = z;
        m.move(-10, 0, 0)
    if x-x2>0.5:
        print(x-x2)
        x2 = x;
        y2 = y;
        z2 = z;
        m.move(-20, 0, 0)
    elif -0.5< x-x2 < -0.3:
        x2 = x;
        y2 = y;
        z2 = z;
        m.move(10, 0, 0)
    elif x-x2<-0.5:
        print(x-x2)

        x2 = x;
        y2 = y;
        z2 = z;
        m.move(20, 0, 0)
