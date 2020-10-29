import React, { PureComponent } from "react";
import G6 from '@antv/g6'
import axios from 'axios';
class G6Test extends PureComponent {
    init = async()=>{
        let response:any = await axios.get("https://gw.alipayobjects.com/os/basement_prod/6cae02ab-4c29-44b2-b1fd-4005688febcb.json");
        const data = {
            // 点集
            nodes: [{
              id: 'node1', // String，该节点存在则必须，节点的唯一标识
              x: 100,      // Number，可选，节点位置的 x 值
              y: 200       // Number，可选，节点位置的 y 值
            },{
              id: 'node2', // String，该节点存在则必须，节点的唯一标识
              x: 300,      // Number，可选，节点位置的 x 值
              y: 200       // Number，可选，节点位置的 y 值
            }],
            // 边集
            edges: [{
              source: 'node1', // String，必须，起始点 id
              target: 'node2'  // String，必须，目标点 id
            }]
        };

        const graph = new G6.Graph({
            container: 'mountNode',  // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
            width: 800,              // Number，必须，图的宽度
            height: 500,              // Number，必须，图的高度
            fitView: true,              //画布留白
            fitViewPadding: [ 20, 40, 50, 20 ],
            renderer: 'svg',
        });
        graph.data(response.data);
        graph.render();
    }
    componentDidMount(){
        this.init();
    }
    render() {
        return <div id="mountNode">

        </div>
    }
}

export default G6Test;