# 使用
url 是一个 webrtc 开头的地址 (webrtc://-----)

option：是video配置
video – 用于播放视频的 HTML Video 元素.

autoplay - 是否自动播放. 默认 false.

onPlay(player) – 播放后回调

onPause(player) – 暂停后回调

JSWebrtc.Player
.play() – 开始

.pause() – 暂停

.stop() – 停止

.destroy() – 停止播放并清理相关的播放资源.

.paused – 只读, 是否暂停播放