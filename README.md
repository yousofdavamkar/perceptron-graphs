<h1>Perceptron Implementation</h1>

<p>This project implements a Perceptron, a simple artificial neural network, in JavaScript.</p>

<h2>Class: Perceptron</h2>

<h3>Constructor</h3>

<pre><code>constructor(inputs, targets, threshold)</code></pre>

<p>Creates a new Perceptron instance.</p>

<ul>
  <li><strong>inputs:</strong> Array of input vectors</li>
  <li><strong>targets:</strong> Array of target values</li>
  <li><strong>threshold:</strong> Activation threshold</li>
</ul>

<h3>Methods</h3>

<h4>epoch()</h4>
<p>Runs 100 training iterations.</p>

<h4>train()</h4>
<p>Performs one complete training cycle over all inputs.</p>

<h4>predict(inputs)</h4>
<p>Makes a prediction for the given input vector.</p>

<h4>createGraph(id)</h4>
<p>Creates a visual representation of the Perceptron's decision boundary.</p>

<h2>Usage Example</h2>

<pre><code>const inputs = [
    [1, 1],
    [1, 0],
    [0, 1],
    [0, 0],
];
const targets = [1, -1, -1, -1];
const net = new Perceptron(inputs, targets, 0.2);
net.epoch();
</code></pre>

<h2>Features</h2>

<ul>
  <li>Implements a basic Perceptron algorithm</li>
  <li>Supports training on custom datasets</li>
  <li>Visualizes decision boundaries using JSXGraph</li>
  <li>Adjustable learning rate and threshold</li>
</ul>

<h2>Dependencies</h2>

<p>This implementation requires the JSXGraph library for visualization.</p>

<h2>License</h2>

<p>This project is open-source and available under the MIT License.</p>
