function sides(literals, ...expressions) {

    let [A, P] = expressions;
    let root = Math.sqrt((P*P)-(16*A));
    let s1 = (P + root)/4;
    let s2 = (P - root)/4;
    [s1, s2] = [s1, s2].sort();

    return [s1, s2];
}
