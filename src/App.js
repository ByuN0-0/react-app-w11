import { Component } from "react";
import Content from "./components/Content";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Cats from "./desc/Cats";
import Manul from "./desc/Manul";
import "./index.css";

//import webImg from "./img/web.png";
//import htmlImg from "./img/html.png";
//import cssImg from "./img/css.png";
import jsImg from "./img/javascript.png";
import reactImg from "./img/react.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "Cat", sub: "The Cutest cat" },
      welcome: { title: "gif cat", desc: "animation cat", image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Gatos_de_Galicia.gif" },
      contents: [
        { id: 1, title: "5 cats", desc: <Cats></Cats>, image: "https://images.mypetlife.co.kr/content/uploads/2023/04/13121310/AdobeStock_163366644-1024x570.jpeg" },
        { id: 2, title: "manul cat", desc: <Manul></Manul>, image: "https://www.cat-lab.co.kr/data/editor/1805/4a609c416f6a655ac25324b32ff4aac9_1526562637_7365.jpg" },
        { id: 3, title: "liquid cat", desc: "Cat is liquid      with https://www.drgoulu.com/wp-content/uploads/2017/09/Rheology-of-cats.pdf  고양이의 뼈는 워낙 연골이 많아서 인간이나 개와 달리 몸 전체가 문어처럼 물렁물렁하다. 그 덕분에 머리뼈만 들어갈 수 있는 틈이면 어디든지 비집고 들어갈 수 있을 정도로 엄청난 유연성을 갖고 있다. 우스갯소리로 연체동물이라거나 실은 고체가 아니라 액체라는 이야기도 있을 정도다. 고양이 액체설(Cats are Liquid)은 고양이가 커다란 컵이나 물통 같은 곳에 마치 액체인 것처럼 들어가 있는 듯한 것을 해학으로 표현한 일종의 밈이다.", image: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/6j8l/image/5yuYDkk43MrgHdfYuVI5kM1htTs.jpg" },
        { id: 4, title: "Cat with fish", desc: "Cat likes fish leave the fish to the cat 통념과 마찬가지로 고양이는 실제로 대부분 생선을 좋아한다. 고양이가 살아가기 위해서는 타우린 성분이 필요하고 이게 없으면 생식능력 저하, 야맹증, 실명 등이 일어나는데, 고양이는 개와 달리 스스로 타우린을 합성하지 못하기 때문에 본능적으로 타우린이 많이 들어간 먹잇감을 찾게 된다. 1온스당 소고기 5.5~10mg, 닭고기 9.5mg, 생선 36mg, 새우 48mg의 타우린이 들어있다. 보다시피 수산물에 압도적으로 많이 들어있다. 단, 오징어나 새우는 고양이가 좋아하기는 하지만 알레르기성 질환이 생기기 쉬우므로 주지 말자.", image: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/kVe/image/27QYQvhbGywASTMGZgd9x-UOhpM.jpg" },
      ],
    };
  }
  render() {
    var _title,
      _desc = null,
      _image = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _image = this.state.welcome.image;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          _image = data.image;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: "welcome" });
          }.bind(this)}
        ></Subject>
        <hr></hr>
        <TOC
          data={this.state.contents}
          onChangePage={function (id) {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }.bind(this)}
        ></TOC>
        <hr></hr>
        <Content title={_title} desc={_desc} img={_image}></Content>
      </div>
    );
  }
}

export default App;