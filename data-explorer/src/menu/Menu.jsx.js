import React, { Component } from 'react';
import { Switch, Button } from 'antd';
import * as d3 from "d3";
class Menu extends Component {
	onChange(checked) {
	  console.log(`switch to ${checked}`);
	}
	componentDidUpdate(){
		if(this.props.loaded){
			let selection = d3.select("#menu")
								.style("transition", "visibility 1s")
								.style("visibility","visible");
			console.log(selection,'selection')
		}
	}
	clickAtt(i){
		console.log(i,'i')
		let attributes = this.props.attributes;
		let va=!attributes[i].check;
		attributes[i].checked=va
		console.log(attributes)
		this.props.setAttributes(attributes);
	}
	render(){
		return(
			<div id="menu" className="menu">
				<div className="attributes">
					<p>ID</p>
					<div className="attributes-container">
					{
						this.props.ids.map((d,i)=>{
							return (
								<Button className="attribute" key={i} type="dashed">{d}</Button>
							)
						})
					}

					</div>

				</div>
				<div className="attributes">
					<p>Attributes</p>
					<div className="attributes-container-wrapper">
					{
						this.props.attributes.map((d,i)=>{
							return (
								<div key={i} className="attributes-container">
									<Button className="attribute"  >{d.name}</Button>
									<Switch className="attribute" defaultChecked onChange={this.onChange.bind(this)} />
									{/*<Switch defaultChecked onChange={this.onChange.bind(this)} />*/}
								</div>
								)
						})
					}
					</div>
				</div>
			</div>
		)
	}
}
export default Menu;