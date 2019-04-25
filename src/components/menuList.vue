<template>
  <v-navigation-drawer v-model="draw" fixed clipped app >
      <v-list>
        <v-divider></v-divider>

        <v-list-group prepend-icon="account_circle"
            v-for="(item, index) in routes" :key="index">
            <template v-slot:activator>
                <v-list-tile>
                    <v-list-tile-title>
                        <router-link :to="item.path || '/'">{{item.name}}</router-link>
                    </v-list-tile-title>
                </v-list-tile>
            </template>
            <v-list-group
                no-action
                sub-group
                value="true"
                v-for="(child, cindex) in item.children"
                :key="cindex"
            >
                <template v-slot:activator>
                    <v-list-tile>
                        <v-list-tile-title>{{child.name}}</v-list-tile-title>
                    </v-list-tile>
                </template>

                <v-list-tile
                    v-for="(admin, i) in child.childrens"
                    :key="i"
                >
                    <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                    <v-list-tile-action>
                    <v-icon v-text="admin[1]"></v-icon>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list-group>
        </v-list-group>
      </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "menuList",
  data() {
    return {
      draw: null,
      routes: [{path: '/page', name: '菜单一'}],
      admins: [
            ['Management', 'people_outline'],
            ['Settings', 'settings']
        ],
      prodata: this.propsData
    }
  },
  props: {
      propsData: {
          type: Boolean
      }
  },
  methods: {
      drawChange: function() {
          this.draw = !this.draw;
      }
  }
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: 100%;
  text-align: left;
  border-right: solid 1px #e6e6e6;
}
.el-menu-vertical-demo .el-menu {
  border-right: none;
}
.v-list {
  padding: 0;
}
</style>

