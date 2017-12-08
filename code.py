from adafruit_hid.mouse import Mouse
from tilt import Tilt
from adafruit_circuitplayground.express import cpx
import math

m = Mouse()
x, y, z = cpx.acceleration
x2 = x;
y2 = y;
z2 = z;

while True:
    x, y, z = cpx.acceleration
    if x-x2>0.5:
        print(x-x2)

        x2 = x;
        y2 = y;
        z2 = z;
        m.move(-30, 0, 0)


    elif x-x2<-0.5:
        print(x-x2)
        x2 = x;
        y2 = y;
        z2 = z;
        m.move(30, 0, 0)
