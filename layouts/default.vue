<template>
    <v-app>
    <app-nav />
    <app-sidebar />
    
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col
            cols="11"
            md="10">
            <slot></slot>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    
    <app-footer />
  </v-app>
</template>