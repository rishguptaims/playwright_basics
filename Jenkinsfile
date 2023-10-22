pipeline {
    agent any
    stages {

       stage('cloning from git') {
            steps {
            git branch: 'master', url: 'https://github.com/rishguptaims/playwright_basics.git'
            }
    }
    stage('Run Node Modules') {
            steps {
                sh 'npm install'
                echo "NPM ran"
            }
        }

    stage('Run Test Modules') {
            steps {
                sh 'npm run test1'
                echo "Tests Ran"
            }
        }        
}
 post {
    always {
      echo "cleaning Workspace!"
    
    }
  }
}