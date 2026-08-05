# 好友相册

这里存放我与朋友们的合照。照片放进 `docs/images/friend/` 目录后，替换下方文件名即可。所有图片支持点击放大。

## 双图并排

<!-- 两张照片一行：替换 friend-1.svg、friend-2.svg 为实际合照文件名 -->
<div class="photo-grid">
  <figure>
    <img src="../images/friend/friend-1.svg" alt="合照一">
    <figcaption>2024 年 春游合照</figcaption>
  </figure>
  <figure>
    <img src="../images/friend/friend-2.svg" alt="合照二">
    <figcaption>2025 年 生日聚会</figcaption>
  </figure>
</div>

## 四宫格

<!-- 四张照片两行两列：每行两张，一行写一个 div.photo-grid -->
<div class="photo-grid">
  <figure>
    <img src="../images/friend/friend-3.svg" alt="合照三">
    <figcaption>球场上的我们</figcaption>
  </figure>
  <figure>
    <img src="../images/friend/friend-4.svg" alt="合照四">
    <figcaption>深夜食堂</figcaption>
  </figure>
</div>
<div class="photo-grid">
  <figure>
    <img src="../images/friend/friend-1.svg" alt="合照五">
    <figcaption>图书馆自习</figcaption>
  </figure>
  <figure>
    <img src="../images/friend/friend-2.svg" alt="合照六">
    <figcaption>毕业留念</figcaption>
  </figure>
</div>

## 三图一行

<!-- 三张照片一行：直接在一行里写三个 img 即可 -->
<div class="photo-grid three">
  <img src="../images/friend/friend-3.svg" alt="合照七">
  <img src="../images/friend/friend-4.svg" alt="合照八">
  <img src="../images/friend/friend-1.svg" alt="合照九">
</div>
