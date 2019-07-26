const trainingData = [
                        {input: {"Budget/Accounting Analyst III": 1}, output: {"kardashian": 1}},
                        {input: {"Pharmacist abin": 1}, output: {"kardashian": 1}},
                        {input: {"Model clothes usa": 1}, output: {"kardashian": 1}},
                        {input: {"VP Accounting ab": 1}, output: {"trump": 1}}, 
                        {input: {"Business Systems Development Analyst": 1}, output: {"trump": 1}}, 
                        {input: {"Programmer I": 1}, output: {"trump": 1}}, 
                        // {input: {red: 1, green: 0.8, blue: 0.8}, output: {light: 0.8}}, 
                        // {input: {red: 1, green: 0.6, blue: 0.6}, output: {neutral: 0.7, light: 0.5}},
                        // {input: {red: 1, green: 0.4, blue: 0.4}, output: {dark: 0.5, neutral: 0.5}},
                        // {input: {red: 1, green: 0.31, blue: 0.31}, output: {dark: 0.6, neutral: 0.3}}, 
                        // {input: {red: 0.8}, output: {dark: 0.85}},
                        // {input: {red: 0.6, green: 0.2, blue: 0.2}, output: {dark: 0.9}}
                    ];


const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);

const arg = {"Pharm": 1} ;
const result = net.run( arg );

console.log(result);