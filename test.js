<View style={styles.container}>
  {" "}
  // padding: 20
  <View style={{ marginLeft: 100, marginTop: 50 }}>
    <Text
      ref="banner"
      style={{ marginTop: 123, backgroundColor: "red", marginLeft: 78 }}
      onPress={() => {
        const handle = findNodeHandle(this.refs.banner);
        UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
          console.log("x=", x); //相对父视图位置x
          console.log("y=", y); //相对父视图位置y
          console.log("width=", width); //组件宽度
          console.log("height=", height); //组件高度
          console.log("pageX=", pageX); //绝对位置x
          console.log("pageY=", pageY); //绝对位置y
        });

        UIManager.measureInWindow(handle, (x, y, width, height) => {
          console.log("====x=", x); //绝对位置x
          console.log("====y=", y); //绝对位置y
          console.log("====width=", width); //组件宽度
          console.log("====height=", height); //组件高度
        });
      }}
    >
      这是一个按钮adsfadsfadf
    </Text>
  </View>
</View>;
