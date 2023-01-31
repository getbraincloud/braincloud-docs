pipeline {
    agent { 
        node {
            label 'docker-agent-nodejs'
            }
      }
    triggers {
        pollSCM 'H/2 * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
                unzip awscliv2.zip
                sudo ./aws/install
                npm install
                npm run build
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."
                sh '''
                touch bcdoc-test.txt
                rm bcdoc-*.*
                '''
            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                zip -r "bcdoc-${BUILD_ID}.zip" build
                npm run server
                aws --profile JenkinsAPIDOCSS3Bucket s3 sync build s3://bcapidocs-dev
                '''
            }
        }
    }
}