# 我的相册

这里存放我的照片。把照片放进 `docs/images/me/` 目录，然后替换下方示例中的文件名即可。点击任意照片可以放大查看。

## 封面大图

<!-- 单张图片居中展示：替换 me-1.svg 为你自己的照片文件名 -->
<figure class="photo-single">
  <img src="../images/me/me-1.svg" alt="封面照片描述">
  <figcaption>封面照片，可在这里写一句话说明</figcaption>
</figure>

## 照片组

<!-- 多图并排：把图片文件名替换成 docs/images/me/ 下的实际文件 -->
<div class="photo-grid">
  <figure>
    <img src="../images/me/me-2.svg" alt="照片描述一">
    <figcaption>照片一说明</figcaption>
  </figure>
  <figure>
    <img src="../images/me/me-3.svg" alt="照片描述二">
    <figcaption>照片二说明</figcaption>
  </figure>
</div>

## 简洁写法

<!-- 如果不想要说明文字，直接用 Markdown 语法也能并排显示 -->
<div class="photo-grid">
  <img src="../images/me/me-1.svg" alt="照片三">
  <img src="../images/me/me-2.svg" alt="照片四">
  <img src="../images/me/me-3.svg" alt="照片五">
</div>
