import flask
# from mcstatus import MinecraftServer

app = flask.Flask(__name__)

REDIRECT = {
    "殞月": "https://www.youtube.com/channel/UCvuz0-GrFYmBe75bQa1yqtA",
    "熊貓團團": "https://www.youtube.com/channel/UCa2rVH7Kefp6SAFBnkgTDKQ",
    "mimebro": "https://www.youtube.com/channel/UCFP5dcztP_2ayfrXFig6-Qg",
    "moco": "https://www.youtube.com/user/zxcv1208924",
    "哈記": "https://www.youtube.com/user/RSPHageeshow",
    "三尾呆犬汪汪": "https://www.youtube.com/user/puppy910240",
    "蔡墨墨": "https://www.youtube.com/channel/UCZe3wu203U1dxuKCKYxvQiQ",
    "狗魚": "https://www.youtube.com/channel/UC3X3vJLnMH1SaH2qFqFySVQ",
    "咕雞酋長": "https://www.youtube.com/channel/UCetMWEIPOsfQY4wZB2QWhwQ",
    "禾卯": "https://www.youtube.com/channel/UCG9f_O7XxBCNJ5tGRhucv7A",
    "冬瓜": "https://www.youtube.com/channel/UC95qnnwo3SXHNYLzSMC1s1Q",
    "紅月": "https://www.youtube.com/channel/UCvfdPn-CJXwnqV733NPRLYA",
}

@app.route("/")
def index():
    return flask.render_template("index.html")

@app.route("/store")
def store():
    return flask.redirect("https://cashier.ecpay.com.tw/store/chescraft")

@app.route("/r/<string:name>")
def yt_redirect(name):
    if name in REDIRECT:
        return flask.redirect(REDIRECT[name])
    return flask.redirect("/")


if __name__ == "__main__":
    app.debug = True
    app.run()
