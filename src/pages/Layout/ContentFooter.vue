<template>
  <footer class="footer">
    <div class="container">
        <nav>
            <ul>
              <li>
                <router-link :to="{path:'/dashboard'}">Home</router-link>
              </li>
                <li>
                    <a href="http://www.techenomics.net">
                        Company
                    </a>
                </li>
                <li>
                    <a href="http://www.techenomics.net/about-us/capability-statement/">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="http://www.techenomics.net/case-studies/">
                        Case Studies
                    </a>
                </li>
            </ul>
        </nav>
        <div class="copyright text-center">
          &copy; {{ new Date().getFullYear() }} <a href="https://www.techenomics.net" target="_blank"Techenomics</a>, Techenomics
        </div>
    </div>
  </footer>

</template>
<script>
export default {}

</script>
<style>

</style>
