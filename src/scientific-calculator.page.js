import Button from "./button.component";
import "./scientific-calculator.css";
const ScientificCalculator = () => (
  <div className="scientific-calculator">
    <Button text={"("} />
    <Button text={")"} />
    <Button text={"mc"} />
    <Button text={"m+"} />
    <Button text={"m-"} />
    <Button text={"mr"} />
    <Button text={(<span>2<sup>nd</sup></span>)} />
    <Button text={(<span>x<sup>2</sup></span>)} />
    <Button text={(<span>x<sup>3</sup></span>)} />
    <Button text={(<span>x<sup>y</sup></span>)} />
    <Button text={(<span>e<sup>x</sup></span>)} />
    <Button text={(<span>10<sup>x</sup></span>)} />
    <Button text={(<span><sup>1</sup>/<sub>x</sub></span>)} />
    <Button text={(<span><sup>2</sup>√x</span>)} />
    <Button text={(<span>∛x</span>)} />
    <Button text={(<span><sup>y</sup>√x</span>)} />
    <Button text={"ln"} />
    <Button text={(<span>log<sub>10</sub></span>)} />
    <Button text={"x!"} />
    <Button text={"sin"} />
    <Button text={"cos"} />
    <Button text={"tan"} />
    <Button text={"e"} />
    <Button text={"EE"} />
    <Button text={"Rad"} />
    <Button text={"sinh"} />
    <Button text={"cosh"} />
    <Button text={"tanh"} />
    <Button text={"π"} />
    <Button text={"Rand"} />
    </div>
);

export default ScientificCalculator;
