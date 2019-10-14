<template>
  <div id="home_page">
    <NavigationBar></NavigationBar>
    <MainNavigation></MainNavigation>
    <LouPlus></LouPlus>
    <Boutique></Boutique>
    <RecentlyRecommendCourse></RecentlyRecommendCourse>
    <BaseCourse></BaseCourse>
    <BackendCourse></BackendCourse>
    <CloudComputeDatCourse></CloudComputeDatCourse>
    <TrainingCourse></TrainingCourse>
    <LearningPath></LearningPath>
    <SiteDescription></SiteDescription>
  </div>
</template>

<script>
import NavigationBar from '@/components/home_page/navigation_bar.vue'
import MainNavigation from '@/components/home_page/main_navigation.vue'
import LouPlus from '@/components/home_page/lou_plus.vue'
import Boutique from '@/components/home_page/boutique.vue'
import RecentlyRecommendCourse from '@/components/home_page/recently_recommend_course.vue'
import BaseCourse from '@/components/home_page/base_course.vue'
import BackendCourse from '@/components/home_page/backend_course.vue'
import CloudComputeDatCourse from '@/components/home_page/cloud_compute_dat_course.vue'
import TrainingCourse from '@/components/home_page/training_course.vue'
import LearningPath from '@/components/home_page/learning_path.vue'
import SiteDescription from '@/components/home_page/site_description.vue'
export default {
  name: 'home',
  components: {
    NavigationBar,
    MainNavigation,
    LouPlus,
    Boutique,
    RecentlyRecommendCourse,
    BaseCourse,
    BackendCourse,
    CloudComputeDatCourse,
    TrainingCourse,
    LearningPath,
    SiteDescription
  }
}
</script>

<style scoped>

</style>
