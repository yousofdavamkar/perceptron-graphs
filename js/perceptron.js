class Perceptron {
    constructor(inputs, targets, threshold) {
        this.inputs = inputs;
        this.targets = targets;
        this.threshold = threshold;
        this.weights = new Array(inputs[0].length);
        this.weights.fill(0);
        this.bias = 0;
        this.learning_rate = 1;
        this.iteration = 0;
    }

    epoch() {
        for (let i = 0; i < 100; i++) {
            this.train();
        }
    }

    train() {
        for (let i = 0; i < this.inputs.length; i++) {
            this.first();
        }
    }

    first() {
        for (let i = 0; i < this.inputs.length; i++) {
            let x = this.inputs[i];
            this.second(x, i);
        }
    }

    second(x, index) {
        let y_in = 0;
        for (let i = 0; i < x.length; i++) {
            y_in += x[i] * this.weights[i];
        }
        y_in += this.bias;
        let y_out = this._activation_function(y_in);
        if (y_out !== this.targets[index]) {
            this._update_weights(x, this.targets[index]);
        }
    }

    _update_weights(x, t) {
        for (let i = 0; i < x.length; i++) {
            this.weights[i] += this.learning_rate * x[i] * t;
        }
        this.bias += this.learning_rate * t;
        document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="box-${this.iteration}"></div>`);
        this.createGraph(`box-${this.iteration}`);
        this.iteration++;
    }

    _activation_function(y_in) {
        if (y_in > this.threshold) return 1;
        else if (-1 * this.threshold < y_in && y_in < this.threshold) return 0;
        else return -1;
    }

    predict(inputs) {
        let y_in = 0;
        for (let i = 0; i < inputs.length; i++) {
            y_in += inputs[i] * this.weights[i];
        }
        y_in += this.bias;
        let y_out = this._activation_function(y_in);
    }

    createGraph(id) {
        const board = JXG.JSXGraph.initBoard(id, {boundingbox: [-5, 8, 8, -5], axis: true});

        function addCurve(board, func, atts) {
            return board.create('functiongraph', [func], atts);
        }

        function plot(func, atts) {
            if (atts == null) {
                return addCurve(board, func, {strokewidth: 2});
            } else {
                return addCurve(board, func, atts);
            }
        }

        this.inputs.forEach((input, index) => {
            board.create('point', input, {style: 6, name: `${targets[index]}`});
        });

        ;((a, b, c, d) => {
            plot(((x) => {
                return (-d - c - (a * x)) / b;
            }));
            plot(((x) => {
                return (d - c - (a * x)) / b;
            }));
        })(this.weights[0], this.weights[1], this.bias, this.threshold);
    }
}

const inputs = [
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 0],
];
const targets = [1, -1, -1, -1];
const net = new Perceptron(inputs, targets, 0.2);
net.epoch();