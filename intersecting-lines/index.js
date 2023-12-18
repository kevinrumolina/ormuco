/* Question A
Your goal for this question is to write a program that accepts two lines (x1,x2) and (x3,x4) on the
x-axis and returns whether they overlap. As an example, (1,5) and (2,6) overlaps but not (1,5)
and (6,8). */

const checkIntersection = () => {
    const point1 = document.querySelector("#segment1Point1").value;
    const point2 = document.querySelector("#segment1Point2").value;
    const point3 = document.querySelector("#segment2Point1").value;
    const point4 = document.querySelector("#segment2Point2").value;

    const [x1, x2] = [Math.min(point1, point2), Math.max(point1, point2)];
    const [x3, x4] = [Math.min(point3, point4), Math.max(point3, point4)];

    const overlap = x2 >= x3 && x4 >= x1;

    console.log(`(${x1}, ${x2}), (${x3}, ${x4})`)

    if (overlap) {
        console.log("the lines overlap");
        document.querySelector("#result").innerHTML = "the lines overlap"
    } else {
        console.log("the lines don't overlap");
        document.querySelector("#result").innerHTML = "the lines don't overlap"
    }
}

const getSegments = () => {
    
}