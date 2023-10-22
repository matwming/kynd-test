<template>
  <div class="shadow-md rounded-xl p-2 h-full sm:mr-4">
    <div class="flex flex-row content-center">
      <div :class="circleStyle">
        {{ initials }}
      </div>
      <div class="flex flex-col">
        {{ member.firstName }} {{ member.lastName }}
        <section class="font-extralight text-xs">
          Member for {{ daysToNow }} days
        </section>
      </div>
    </div>

    <div class="truncate-double-line text-sm">
      {{ member.lastMessage }}
    </div>
  </div>
</template>

<style lang="scss">
.truncate-double-line {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
<script lang="ts">
import members, { Member } from "../services/members";
import { Component, Vue, Prop } from "vue-property-decorator";
import dayjs from "dayjs";
import { mapInitialsToHexColour } from "../utils/colours";
@Component({
  computed: {
    members() {
      return members;
    },
  },
  components: {},
})
export default class MemberCard extends Vue {
  @Prop({ default: {} }) readonly member!: Member;

  get circleStyle(): string {
    const bgColor = mapInitialsToHexColour(this.initials[0]);
    return `rounded-full bg-[${bgColor}] w-16 h-16 flex items-center justify-center mr-6 mb-4 flex-shrink-0 font-bold`;
  }

  get initials(): string {
    return this.member.firstName[0] + this.member.lastName[0];
  }

  get daysToNow(): number {
    return dayjs(Date.now()).diff(
      dayjs(this.member.joinedAt).format("YYYY-MM-DD"),
      "day"
    );
  }
}
</script>
