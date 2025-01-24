pipeline {
    agent any
    tools {
        nodejs 'yarn'
    }

    stages {
        stage('install') {
            steps {
                sh 'yarn'
            }
        }

        stage('test') {
            steps {
                sh 'yarn test'
            }
            post {
                always {
                    junit '**/reports/**/*.xml'
                }
            }
        }

        stage('e2e test') {
            steps {
                sh 'yarn build'
                sh 'yarn test:e2e'
            }
        }

    }

}
