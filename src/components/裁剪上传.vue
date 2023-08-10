<template>
  <el-dialog :title="title" :visible.sync="open" width="800px" append-to-body @opened="modalOpened">
    <el-row>
      <el-col :xs="24" :md="12" :style="{height: '350px'}">
        <vue-cropper
            ref="cropper"
            :img="options.img"
            :info="true"
            :autoCrop="options.autoCrop"
            :autoCropWidth="options.autoCropWidth"
            :autoCropHeight="options.autoCropHeight"
            :fixedBox="options.fixedBox"
            @realTime="realTime"
            v-if="visible"
        />
      </el-col>
      <el-col :xs="24" :md="12" :style="{height: '350px'}">
        <div class="avatar-upload-preview">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </el-col>
    </el-row>
    <br />
    <el-row>
      <el-col :lg="2" :md="2">
        <el-upload action="#" :http-request="requestUpload" :show-file-list="false" :before-upload="beforeUpload">
          <el-button size="small">
            上传
            <i class="el-icon-upload el-icon--right"></i>
          </el-button>
        </el-upload>
      </el-col>
      <el-col :lg="{span: 1, offset: 2}" :md="2">
        <el-button icon="el-icon-plus" size="small" @click="changeScale(1)"></el-button>
      </el-col>
      <el-col :lg="{span: 1, offset: 1}" :md="2">
        <el-button icon="el-icon-minus" size="small" @click="changeScale(-1)"></el-button>
      </el-col>
      <el-col :lg="{span: 1, offset: 1}" :md="2">
        <el-button icon="el-icon-refresh-left" size="small" @click="rotateLeft()"></el-button>
      </el-col>
      <el-col :lg="{span: 1, offset: 1}" :md="2">
        <el-button icon="el-icon-refresh-right" size="small" @click="rotateRight()"></el-button>
      </el-col>
      <el-col :lg="{span: 2, offset: 6}" :md="2">
        <el-button type="primary" size="small" @click="uploadImg()">提 交</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { VueCropper }  from 'vue-cropper'

export default {
  name: "裁剪上传",
  components: {
    VueCropper,
  },

}
</script>

<style scoped>

</style>
