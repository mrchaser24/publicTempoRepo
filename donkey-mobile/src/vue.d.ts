import Vue from "vue"; 
import Apis from "@/api/index"
declare module "vue/types/vue" {
  interface Vue {
   Apis: any 
   clipboard:any
 }
}